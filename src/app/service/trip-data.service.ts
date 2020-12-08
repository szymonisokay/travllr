import { Injectable } from '@angular/core';
import { Trip } from '../shared/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor() { }

  trips: Trip[] = [
    new Trip(1, "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "Hawaje", 6000, "14/07/2021", "21/07/2021"),
    new Trip(2, "https://images.unsplash.com/photo-1528837516156-0a7225a43641?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80", "Islandia", 3400, "14/06/2021", "21/06/2021"),
    new Trip(3, "https://images.unsplash.com/photo-1527346944637-89b61119597c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80", "Wyspy Owcze", 7250, "20/07/2021", "25/07/2021"),
    new Trip(4, "https://images.unsplash.com/photo-1528164344705-47542687000d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80", "Japonia", 10000, "19/08/2021", "30/08/2021"),
    new Trip(5, "https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", "Madagaskar", 6400, "2/09/2021", "9/09/2021"),
    new Trip(6, "https://images.unsplash.com/photo-1552058185-28aa65f3bbaf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80", "Laos", 5100, "4/06/2021", "11/06/2021"),
    new Trip(7, "https://images.unsplash.com/photo-1541769740-098e80269166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80", "Egipt", 2200, "8/07/2021", "15/07/2021"),
    new Trip(8, "https://images.unsplash.com/photo-1571864436401-7ada6f8de63d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80", "Chile", 8800, "20/09/2021", "30/09/2021"),
    new Trip(9, "https://images.unsplash.com/photo-1597240890437-6d9c2d4c16aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "Wyspy Wielkanocne", 11500, "16/08/2021", "23/08/2021"),

  ]

  getTripData() {
    return this.trips;

  }
}
