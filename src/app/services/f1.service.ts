import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SeasonsResponse} from '../models/f1-season';
import {catchError, map, of, retry, take} from 'rxjs';
import {RaceResponse} from '../models/f1-rounds';
import {ResultsResponse} from '../models/f1-results';

@Injectable({
  providedIn: 'root'
})
export class F1Service {

  constructor(private http: HttpClient) {
  }

  getSeasons() {
    return this.http.get <SeasonsResponse>('https://ergast.com/api/f1/seasons.json?limit=100')
      .pipe(retry(2), take(1), catchError(err => {
          console.error(err)
          return of(
            {
              'MRData': {
                'xmlns': 'http:\/\/ergast.com\/mrd\/1.5',
                'series': 'f1',
                'url': 'http://ergast.com/api/f1/seasons.json',
                'limit': '30',
                'offset': '0',
                'total': '75',
                'SeasonTable': {
                  'Seasons': [{
                    'season': '1950',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1950_Formula_One_season'
                  }, {
                    'season': '1951',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1951_Formula_One_season'
                  }, {
                    'season': '1952',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1952_Formula_One_season'
                  }, {
                    'season': '1953',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1953_Formula_One_season'
                  }, {
                    'season': '1954',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1954_Formula_One_season'
                  }, {
                    'season': '1955',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1955_Formula_One_season'
                  }, {
                    'season': '1956',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1956_Formula_One_season'
                  }, {
                    'season': '1957',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1957_Formula_One_season'
                  }, {
                    'season': '1958',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1958_Formula_One_season'
                  }, {
                    'season': '1959',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1959_Formula_One_season'
                  }, {
                    'season': '1960',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1960_Formula_One_season'
                  }, {
                    'season': '1961',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1961_Formula_One_season'
                  }, {
                    'season': '1962',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1962_Formula_One_season'
                  }, {
                    'season': '1963',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1963_Formula_One_season'
                  }, {
                    'season': '1964',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1964_Formula_One_season'
                  }, {
                    'season': '1965',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1965_Formula_One_season'
                  }, {
                    'season': '1966',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1966_Formula_One_season'
                  }, {
                    'season': '1967',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1967_Formula_One_season'
                  }, {
                    'season': '1968',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1968_Formula_One_season'
                  }, {
                    'season': '1969',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1969_Formula_One_season'
                  }, {
                    'season': '1970',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1970_Formula_One_season'
                  }, {
                    'season': '1971',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1971_Formula_One_season'
                  }, {
                    'season': '1972',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1972_Formula_One_season'
                  }, {
                    'season': '1973',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1973_Formula_One_season'
                  }, {
                    'season': '1974',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1974_Formula_One_season'
                  }, {
                    'season': '1975',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1975_Formula_One_season'
                  }, {
                    'season': '1976',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1976_Formula_One_season'
                  }, {
                    'season': '1977',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1977_Formula_One_season'
                  }, {
                    'season': '1978',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1978_Formula_One_season'
                  }, {
                    'season': '1979',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1979_Formula_One_season'
                  }]
                }
              }
            } as SeasonsResponse
          )
        }), map(response => response.MRData.SeasonTable.Seasons.map(season => season.season))
      )
  }

  getRounds(season: string) {
    return this.http.get<RaceResponse>(`https://ergast.com/api/f1/${season}.json`)
      .pipe(retry(2), take(1), catchError(err => {
          console.error(err)
          return of(
            {} as RaceResponse
          )
        }), map(response => response.MRData.RaceTable.Races)
      )
  }

  getRaceResults(season: string, round: string) {
    return this.http.get<ResultsResponse>(`https://ergast.com/api/f1/${season}/${round}/results.json`)
      .pipe(retry(2), take(1), catchError(err => {
          console.error(err)
          return of(
            {} as ResultsResponse
          )
        }), map(response => response.MRData.RaceTable.Races)
      )
  }

}


