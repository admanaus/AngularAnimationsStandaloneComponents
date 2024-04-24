import { Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { FilterStaggerComponent } from './filter-stagger/filter-stagger.component';

export const routes: Routes = [
    { path: 'open-close', component: OpenCloseComponent, data: { animation: 'OpenClose' } },
    { path: 'insert-remove', component: InsertRemoveComponent, data: { animation: 'InsertRemove' } },
    { path: 'filter-stagger', component: FilterStaggerComponent, data: { animation: 'FilterStagger' } },
    { path: '**', component: OpenCloseComponent },
  ];
