create parkingService
  1. creates singleton for parkingManager
  createParkingLot(level, capacity) => called from main file
  // this method will receive a level number and parking capacity on that level
  // it will create an instance of parkingNamager by calling parkingManager.getInstance()
  2. checks for basic errors otherwise call parkingmanager 

create a parkingManager - (more like a repository/dao to deal will actual objects)
  // its a singleton
  getInstance()
  // initilize parking lot by creating a map PL for levels (levelParkingMap) where key is level and value is map of slots(slotVehicleMap)
  // on that level.

  levelParkingMap = {
    level_number1: { level, capacity, availability, slotVehicleList: [{ id: slot_number1, slot: : slotObject}] },
    level_number2: { level, capacity, availability, slotVehicleList: [{ id: slot_number1, slot: : slotObject}] }
  }

parkingLevelManager handles individual level
parkingManager calls parkingLevelManager for given level