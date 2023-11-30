import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  public set(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public get(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  public delete(key: string): void {
    sessionStorage.removeItem(key);
  }

  public setToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getFromLocalStorage(key: string): string{
    return localStorage.getItem(key)!;
  }

  public deleteFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
