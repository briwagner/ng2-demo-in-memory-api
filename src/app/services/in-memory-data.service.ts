import { InMemoryDbService } from 'angular-in-memory-web-api';
import { URLSearchParams } from '@angular/http';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let actors = {"hits": {"hits": // emulates format of ElasticSearch
            [
                {"_source": {"name": "Jeff", "hair_color": "blonde", "gender": "male"}},
                {"_source": {"name": "Dave", "hair_color": "green", "gender": "droid"}}
            ]
        }};
        let main_menu = [
            {"name": "About", "path": "/about"},
            {"name": "Contact", "path": "/contact"},
            {"name": "More info", "path": "/more_info"}
        ]
        return { actors, main_menu }
    }
}

export class InMemoryDataOverrideService extends InMemoryDataService {
    parseUrl(url: string) {
        let location = this.getLocation(url);
        let result = {};

        let path = location.pathname.split("/");
        let base = path[1];
        let collectionName = path[2];
        let id;
        let query = location.search && new URLSearchParams(location.search.substr(1));
        let resourceUrl;

        if ( collectionName == "complicated_production_url_path" ) {
            collectionName = "actors" 
        } 

        result = {base, collectionName, id, query, resourceUrl};
        // console.log(result);
        return result;
    }

    private getLocation(href: string) {
        const link = document.createElement('a');
        link.href = href;
        return link;
    }
}