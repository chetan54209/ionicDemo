import { DataService } from "./data.service";
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe("DataService", () => {
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });

    dataService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });


  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'test1',
          email: "test1@example.com",
          age: 26
        },
        {
          id: "2",
          name: "Test2",
          email: "test2@example.com",
          age: 27
        }
      ];
      let response;
      spyOn(dataService, 'all').and.returnValue(of(userResponse));

      dataService.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
  
});