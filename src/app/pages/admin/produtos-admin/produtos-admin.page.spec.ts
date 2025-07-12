import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosAdminPage } from './produtos-admin.page';

describe('AdminPage', () => {
  let component: ProdutosAdminPage;
  let fixture: ComponentFixture<ProdutosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
