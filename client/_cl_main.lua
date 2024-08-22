FW = exports['fw-core']:GetCoreObject()
LoggedIn = false
local CurrentShell = nil

RegisterNetEvent('FW:Client:OnPlayerLoaded', function()
    LoggedIn = true
end)

RegisterNetEvent('FW:Client:OnPlayerUnload', function()
    LoggedIn = false
end)

-- Code

local InEditor, Cam, PlayerCoords, CurrentEntity = false, nil, vector3(0.0, 0.0, 0.0), nil
local ObjectList, GhostEntity = {}, false

-- Events

RegisterNetEvent("fw-editor:Client:SetState", function(State, Objects)
    InEditor = State

    SetNuiFocus(State, State)
    SetNuiFocusKeepInput(State)

    if State then
        Cam = CreateCamera(GetHashKey("DEFAULT_SCRIPTED_CAMERA"), false)
        if not DoesCamExist(Cam) then return end

        SetCamCoord(Cam, GetGameplayCamCoord())
        SetCamRot(Cam, GetGameplayCamRot())
        
        SetCamActive(Cam, true)
        SetCamFov(Cam, 50.0)
        RenderScriptCams(true, false)

        PlayerCoords = GetEntityCoords(PlayerPedId()) - vector3(0.0, 0.0, 1.0)
        FreezeEntityPosition(PlayerPedId(), true)
        SetEntityVisible(PlayerPedId(), false)
        SetEntityCoords(PlayerPedId(), GetGameplayCamCoord())

        AttachCamToEntity(Cam, PlayerPedId(), 0.0, 0.0, 0.0, true)

        ObjectList = Objects
        for Shell, v in pairs(Config.IgnoreEntityList) do
            local ClosestShell = GetClosestObjectOfType(GetEntityCoords(PlayerPedId()), 10.0, Shell, false, false, false)
            if ClosestShell ~= 0 then
                CurrentShell = ClosestShell
            end
        end
        CameraMovement()
    else
        if not DoesCamExist(Cam) then return end

        RenderScriptCams(false, false)
        SetTimeout(250, function()
            DestroyCam(Cam)
        end)

        for k, v in pairs(ObjectList) do
            DeleteEntity(v)
        end

        if GhostEntity and DoesEntityExist(GhostEntity) then
            DeleteEntity(GhostEntity)
        end

        if not IsEntityVisible(PlayerPedId()) then
            FreezeEntityPosition(PlayerPedId(), false)
            SetEntityVisible(PlayerPedId(), true)
            SetEntityCoords(PlayerPedId(), PlayerCoords)
        end

        exports['fw-housing']:LoadInteriorDecorations(exports['fw-housing']:GetCurrentHouse().Decorations or {})
    end

    SendNUIMessage({
        Action = "SetEditor",
        State = State,
    })

end)

AddEventHandler("onResourceStop", function(ResourceName)
    if ResourceName ~= GetCurrentResourceName() then return end

    if not DoesCamExist(Cam) then return end
    RenderScriptCams(false, false)

    if not IsEntityVisible(PlayerPedId()) then
        FreezeEntityPosition(PlayerPedId(), false)
        SetEntityVisible(PlayerPedId(), true)
        SetEntityCoords(PlayerPedId(), PlayerCoords)
    end
end)

-- Functions

-- Camera Movement
function CameraMovement()
    CreateThread(function()
        while InEditor do
            local Rv, Fv, Uv, Campos = GetCamMatrix(Cam)

            -- Movement
            if IsDisabledControlPressed(0, 32) then -- W
                local NewPos = GetEntityCoords(PlayerPedId()) + Fv * Config.Settings.CameraSpeed
                SetEntityCoordsNoOffset(PlayerPedId(), NewPos)
            end

            if IsDisabledControlPressed(0, 33) then -- S
                local NewPos = GetEntityCoords(PlayerPedId()) - Fv * Config.Settings.CameraSpeed
                SetEntityCoordsNoOffset(PlayerPedId(), NewPos)
            end

            if IsDisabledControlPressed(0, 34) then -- A
                local NewPos = GetOffsetFromEntityInWorldCoords(PlayerPedId(), -Config.Settings.CameraSpeed, 0.0, 0.0)
                SetEntityCoordsNoOffset(PlayerPedId(), NewPos.x, NewPos.y, GetEntityCoords(PlayerPedId()).z)
            end

            if IsDisabledControlPressed(0, 35) then -- D
                local NewPos = GetOffsetFromEntityInWorldCoords(PlayerPedId(), Config.Settings.CameraSpeed, 0.0, 0.0)
                SetEntityCoordsNoOffset(PlayerPedId(), NewPos.x, NewPos.y, GetEntityCoords(PlayerPedId()).z)
            end

            if IsDisabledControlPressed(0, 51) then -- E
                local NewPos = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 0.0, Config.Settings.CameraSpeed / 2)
                SetEntityCoordsNoOffset(PlayerPedId(), NewPos)
            end
            
            if IsDisabledControlPressed(0, 52) then -- Q
                local NewPos = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 0.0, -Config.Settings.CameraSpeed / 2)
                SetEntityCoordsNoOffset(PlayerPedId(), NewPos)
            end

            -- set ped heading to cam heading, actual rotation is done in UI.
            local CamRot = GetCamRot(Cam, 2)
            SetEntityHeading(PlayerPedId(), (360 + CamRot.z) % 360.0)

            -- Disable Controls
            DisableAllControlActions(0)

            -- If distance from shell is too far close the editor.
            if #(GetEntityCoords(PlayerPedId()) - GetEntityCoords(CurrentShell)) > 60.0 then
                TriggerEvent("fw-editor:Client:SetState", false)
            end
      
            Wait(1)
        end
    end)
end

-- NUI Callbacks

RegisterNUICallback("Editor/Close", function(Data, Cb)
    TriggerEvent("fw-editor:Client:SetState", false)
    Cb("Ok")
end)

RegisterNUICallback("Editor/GetObjects", function(Data, Cb)
    Cb(Config.Objects)
end)

RegisterNUICallback("Editor/MoveCamera", function(Data, Cb)
    if DoesCamExist(Cam) then
        SetCamCoord(Cam, vector3(Data.x, Data.y, Data.z))
        SetEntityCoords(PlayerPedId(), vector3(Data.x, Data.y, Data.z))
    end
    Cb("Ok")
end)

RegisterNUICallback("Editor/RotateCamera", function(Data, Cb)
    if DoesCamExist(Cam) then
        local XMult = 2 * 360 / Data.screenX
        local YMult = 2 * 360 / Data.screenY
        local CamRot = GetCamRot(Cam)
        SetCamRot(Cam, CamRot + vector3(-Data.y * YMult, 0.0, -Data.x * XMult))
    end

    Cb("Ok")
end)

RegisterNUICallback("Editor/SelectEntity", function(Data, Cb)
    local Offset = vector2(Data.x, Data.y)
    local Coords = ScreenRelToWorld(GetCamCoord(Cam), GetCamRot(Cam, 2), Offset)
    local Hit, EndCoords, EntityHit = LocationInWorld(Coords, Cam, 1 + 16 + 32 + 64 + 256)

    if Config.IgnoreEntityList[GetEntityModel(EntityHit)] then
        EntityHit = 0
        Hit = 0
    end

    if Hit and EntityHit and EntityHit == GhostEntity then
        SetEntityAlpha(GhostEntity, 255)
        ObjectList[#ObjectList + 1] = GhostEntity
        GhostEntity = false
    end

    Cb({ Hit = Hit, Entity = EntityHit })
end)

RegisterNUICallback("Editor/GetEntityData", function(Data, Cb)
    if DoesEntityExist(Data.Entity) and IsEntityAnObject(Data.Entity) then
        CurrentEntity = Data.Entity

        local Hash = GetEntityModel(Data.Entity)
        local EntityAlpha = GetEntityAlpha(Data.Entity)
        local EntityCoords, EntityRot = GetEntityCoords(Data.Entity), GetEntityCoords(Data.Entity, 2)
        local CamCoords = GetGameplayCamCoord()

        Cb({
            Success = true,
            Hash = Hash,
            EntityAlpha = EntityAlpha,
            EntityCoords = { x = EntityCoords.x, y = EntityCoords.y, z = EntityCoords.z },
            EntityRot = { pitch = EntityRot.x, roll = EntityRot.y, yaw = EntityRot.z },
            CamCoords = { x = CamCoords.x, y = CamCoords.y, z = CamCoords.z },
            Distance = #(CamCoords - EntityCoords)
        })

        CreateThread(function()
            while CurrentEntity and CurrentEntity == Data.Entity do
                local CamCoords = GetCamCoord(Cam)
                local CamRot = GetCamRot(Cam, 1)
                local CamFov = GetCamFov(Cam)

                SendNUIMessage({
                    Action = "UpdatePositions",
                    Cam = {
                        Position = CamCoords,
                        Rotation = CamRot,
                        Fov = CamFov,
                    },
                    Entity = {
                        Position = GetEntityCoords(CurrentEntity),
                        Rotation = GetEntityRotation(CurrentEntity)
                    }
                })

                Wait(10)
            end
        end)
    else
        CurrentEntity = false
        Cb({ Success = false })
    end
end)

RegisterNUICallback("Editor/EditEntity", function(Data, Cb)
    if DoesEntityExist(Data.Entity) then
        SetEntityAlpha(Data.Entity, Data.Alpha, false)
        SetEntityCoords(Data.Entity, Data.x * 1.0, Data.y * 1.0, Data.z * 1.0)
        SetEntityRotation(Data.Entity, Data.pitch * 1.0, Data.roll * 1.0, Data.yaw * 1.0, 0, true)
    end
    Cb("Ok")
end)

RegisterNUICallback("Editor/SpawnGhost", function(Data, Cb)
    local Model = GetHashKey(Data.Model)

    if IsModelValid(Model) and _RequestModel(Data.Model) then
        local Ped = PlayerPedId()
        local PedCoords = PlayerPedId()

        if DoesEntityExist(GhostEntity) and GetEntityModel(GhostEntity) == Model then
            return
        end

        if GhostEntity and DoesEntityExist(GhostEntity) then
            DeleteEntity(GhostEntity)
        end

        local Offset = vector2(0.5, 0.5)
        local Coords = ScreenRelToWorld(GetCamCoord(Cam), GetCamRot(Cam, 2), Offset)
        local Hit, Pos, Entity = LocationInWorld(Coords, Cam, -1)

        if Hit then
            local MidPoint = GetOffsetFromEntityInWorldCoords(Ped, 0.0, 4.0, -2.0)
            GhostEntity = CreateObject(Model, MidPoint.x, MidPoint.y, MidPoint.z, false, false, false, true, true)
        else
            GhostEntity = CreateObject(Model, PedCoords.x, PedCoords.y, PedCoords.z, false, false, false, true, true)
        end

        SetEntityAlpha(GhostEntity, 200)
        FreezeEntityPosition(GhostEntity, true)
    end
end)

RegisterNUICallback("Entity/SaveObjects", function(Data, Cb)
    if not exports['fw-housing']:GetCurrentHouse() then
        return FW.Functions.Notify("You are not inside a house...", "error")
    end

    local Objects = {}
    for k, v in pairs(ObjectList) do
        if v and GetEntityModel(v) then
            Objects[#Objects + 1] = {
                Model = GetEntityModel(v),
                Coords = GetEntityCoords(v),
                Rot = GetEntityRotation(v),
            }
        end
    end

    TriggerServerEvent("fw-editor:Server:SaveObjects", exports['fw-housing']:GetCurrentHouse().Id, Objects)
    TriggerEvent("fw-editor:Client:SetState", false)
end)

RegisterNUICallback("Entity/Delete", function(Data, Cb)
    if DoesEntityExist(CurrentEntity) then

        for k, v in pairs(ObjectList) do
            if v == CurrentEntity then
                table.remove(ObjectList, k)
                break
            end
        end

        DeleteEntity(CurrentEntity)
    end
end)

RegisterNUICallback("Entity/Ground", function(Data, Cb)
    if DoesEntityExist(CurrentEntity) then
        PlaceObjectOnGroundProperly(CurrentEntity)
    end
end)

-- Test code to spawn a test object.
-- local TestObject
-- CreateThread(function()
--     local ModelName = "v_res_cabinet"
--     exports['fw-assets']:RequestModelHash(ModelName)

--     local MidPoint = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 2.0, 0.0)
--     TestObject = CreateObject(Model, MidPoint.x, MidPoint.y, MidPoint.z, false, false, false, true, true)
-- end)

-- AddEventHandler("onResourceStop", function()
--     if DoesEntityExist(TestObject) then
--         DeleteEntity(TestObject)
--     end
-- end)