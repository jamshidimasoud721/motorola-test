import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

export function authGuard() {
  const router = inject(Router)
  const id = localStorage.getItem('id');
  if (id) {
    return true
  }
  router.navigate([''])
  return false
}
