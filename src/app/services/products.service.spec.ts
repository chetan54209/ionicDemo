import { TestBed , getTestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


let injector: TestBed;
let service: ProductsService;
let httpMock: HttpTestingController;

describe("ProductServices", () => {

  let injector: TestBed;
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductsService]
      });

      injector = getTestBed();
      service = injector.get(ProductsService);
      httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
      httpMock.verify();
  });

it('should be created', () => {
  const service: ProductsService = TestBed.get(ProductsService);
  expect(service).toBeTruthy();
});

it('#getAllUsers() should return an Observable<userData[]>', () => {
  // const searchString = "Test1";
  const dummyUsers = [{ id: '1', name: 'Test1', email: 'test1@example.com', age: 26 }];

  service.getAllUsers().subscribe(user => {
      expect(user.length).toBe(1);
      expect(user).toEqual(dummyUsers);
  })

  const req = httpMock.expectOne('assets/data/data.json');
  expect(req.request.method).toBe("GET");
  req.flush(dummyUsers);
});

});