FW = exports['fw-core']:GetCoreObject()

RegisterNetEvent("fw-editor:Server:SaveObjects", function(Id, Objects)
    for k, Data in pairs(Objects) do
        if Data.Model == nil then
            print('[FW-EDITOR] Model is nil for object ['..k..'], removing from decorations...')
            Objects[k] = nil
        end
    end
    exports['fw-housing']:SetHousingDecorations(Id, Objects)
    print('[FW-EDITOR] Saved objects for house ['..Id..']')
end)