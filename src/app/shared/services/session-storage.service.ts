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
}
