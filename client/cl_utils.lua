function RotationToDirection(Rotation)
    local X, Z = math.rad(Rotation.x), math.rad(Rotation.z)
    local Num = math.abs(math.cos(X))
    local Vector3Direction = vector3(-math.sin(Z) * Num, math.cos(Z) * Num, math.sin(X))
    return Vector3Direction
end

function ScreenRelToWorld(CamPos, CamRot, Coord)
    local Distance = 1000.0
    local CamForward = RotationToDirection(CamRot);
    local RotUp = CamRot + vector3(Distance, 0, 0);
    local RotDown = CamRot + vector3(-Distance, 0, 0);
    local RotLeft = CamRot + vector3(0, 0, -Distance);
    local RotRight = CamRot + vector3(0, 0, Distance);

    local CamRight = RotationToDirection(RotRight) - RotationToDirection(RotLeft);
    local CamUp = RotationToDirection(RotUp) - RotationToDirection(RotDown);

    local RollRad = -math.rad(CamRot.y);

    local CamRightRoll = CamRight * math.cos(RollRad) - CamUp * math.sin(RollRad);
    local CamUpRoll = CamRight * math.sin(RollRad) + CamUp * math.cos(RollRad);

    local Point3D = CamPos + CamForward * Distance + CamRightRoll + CamUpRoll
    local _, CX, CY = GetScreenCoordFromWorldCoord(Point3D.x, Point3D.y, Point3D.z)
    local Point2D = { X = CX, Y = CY }

    if not Point2D or not CX or not CY then
        return CamPos + CamForward * Distance
    end

    local Point3DZero = CamPos + CamForward * Distance
    local _, CX, CY = GetScreenCoordFromWorldCoord(Point3DZero.x, Point3DZero.y, Point3DZero.z)
    local Point2DZero = { X = CX, Y = CY }

    if not Point2DZero or not CX or not CY then
        return CamPos + CamForward * Distance
    end

    local Eps = 0.00001
    if (math.abs(Point2D.X - Point2DZero.X) < Eps or math.abs(Point2D.Y - Point2DZero.Y) < Eps) then
        return CamPos + CamForward * Distance
    end

    local ScaleX = (Coord.x - Point2DZero.X) / (Point2D.X - Point2DZero.X)
    local ScaleY = (Coord.y - Point2DZero.Y) / (Point2D.Y - Point2DZero.Y)

    local Point3Dret = CamPos + CamForward * Distance + CamRightRoll * ScaleX + CamUpRoll * ScaleY
    return Point3Dret
end

function LocationInWorld(Coords, camera, flags)
    local CamPos = GetCamCoord(camera)
    local RayCast = StartShapeTestRay(CamPos.x, CamPos.y, CamPos.z, Coords.x, Coords.y, Coords.z, flags, PlayerPedId(), 0)
    local Retval, Hit, EndCoords, SurfaceNormal, Entity = GetShapeTestResult(RayCast)
    return Hit, EndCoords, Entity
end

function _RequestModel(Model)
    if not IsModelValid(Model) then
        return print("^1ERROR: Failed to load '" .. Model .. "' model!")
    end

    RequestModel(Model)
    local Attempts = 0
    while Attempts < 100 and not HasModelLoaded(Model) do
        Attempts = Attempts + 1
        Citizen.Wait(100)
    end

    if not HasModelLoaded(Model) then
        print("^1ERROR: Failed to load '" .. Model .. "' model!")
    end

    return true
end