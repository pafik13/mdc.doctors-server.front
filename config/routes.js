/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // },
  
  // '/main': {
  //   view: 'main',
  //   locals: {
  //     menu: 'main'
  //   }
  // },
  
  // '/report': {
  //   view: 'report'
  // },
  
  '/signin': {
    view: 'signin',
    locals: {
      isHideSideBar: true,
      isHideNavBar: true
    }
  },
  
  // '/nets': {
  //   view: 'nets',
  //   locals: {
  //     menu: 'nets'
  //   }
  // },
  
  // '/agents': {
  //   view: 'agents',
  //   locals: {
  //     menu: 'agents'
  //   }
  // },
  
  // '/contracts': {
  //   view: 'contracts',
  //   locals: {
  //     menu: 'contracts'
  //   }
  // },
  
  // '/drugbrands': {
  //   view: 'drugbrands',
  //   locals: {
  //     menu: 'drugbrands'
  //   }
  // },
  
  // '/drugskus': {
  //   view: 'drugskus',
  //   locals: {
  //     menu: 'drugskus'
  //   }
  // },
  
  // '/messagetypes': {
  //   view: 'messagetypes',
  //   locals: {
  //     menu: 'messagetypes'
  //   }
  // },
  
  // '/phototypes': {
  //   view: 'phototypes',
  //   locals: {
  //     menu: 'phototypes'
  //   }
  // },
  
  // '/places': {
  //   view: 'places',
  //   locals: {
  //     menu: 'places'
  //   }
  // },
  
  // '/positions': {
  //   view: 'positions',
  //   locals: {
  //     menu: 'positions'
  //   }
  // },
  
  // '/promotions': {
  //   view: 'promotions',
  //   locals: {
  //     menu: 'promotions'
  //   }
  // },
  
  // '/categories': {
  //   view: 'categories',
  //   locals: {
  //     menu: 'categories'
  //   }
  // },
  
  // '/regions': {
  //   view: 'regions',
  //   locals: {
  //     menu: 'regions'
  //   }
  // },
  
  // '/subways': {
  //   view: 'subways',
  //   locals: {
  //     menu: 'subways'
  //   }
  // },

  // '/worktypes': {
  //   view: 'worktypes',
  //   locals: {
  //     menu: 'worktypes'
  //   }
  // },
  
  // '/materials': {
  //   view: 'materials',
  //   locals: {
  //     menu: 'materials'
  //   }
  // },
  
  // '/listedhospitals': {
  //   view: 'listedhospitals',
  //   locals: {
  //     menu: 'listedhospitals'
  //   }
  // },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'get /' : 'ViewController.home',
  'get /nets' : 'ViewController.nets',
  'get /agents' : 'ViewController.agents',
  'get /contracts' : 'ViewController.contracts',
  'get /drugbrands' : 'ViewController.drugbrands',
  'get /drugskus' : 'ViewController.drugskus',
  'get /messagetypes' : 'ViewController.messagetypes',
  'get /phototypes' : 'ViewController.phototypes',
  'get /places' : 'ViewController.places',
  'get /positions' : 'ViewController.positions',
  'get /promotions' : 'ViewController.promotions',
  'get /categories' : 'ViewController.categories',
  'get /regions' : 'ViewController.regions',
  'get /subways' : 'ViewController.subways',
  'get /worktypes' : 'ViewController.worktypes',
  'get /materials' : 'ViewController.materials',
  'get /listedhospitals' : 'ViewController.listedhospitals',
  'get /categoryrules' : 'ViewController.categoryrules',
  'get /uploadfiles' : 'ViewController.uploadfiles',

  'get /net/options' : 'NetController.options',
  'get /place/options' : 'PlaceController.options',
  'get /region/options' : 'RegionController.options',
  'get /subway/options' : 'SubwayController.options',
  'get /categorybynet/options' : 'CategoryController.bynetoptions',
  'get /categorybysell/options' : 'CategoryController.byselloptions',
  
  'GET /worktype': {
    blueprint: "find", 
    criteria: {
        blacklist: ["access_token", "limit", "skip", "sort", "populate"]
  },
  
  'get /agent/byjwt' : 'AgentController.byjwt',
  
  'get /pharmacy/byjwt' : 'PharmacyController.byjwt',
  'get /employee/byjwt' : 'EmployeeController.byjwt',

  'post /photodata/upload' : 'PhotoDataController.upload',
  
	'post /uploadfiles': {
		controller	: 'uploadfiles',
		action		  : 'create'
	},
	
	'put /uploadfiles/:id': {
		controller	: 'uploadfiles',
		action		  : 'update'
	},
	
	'delete /uploadfiles/:id': {
		controller	: 'uploadfiles',
		action		  : 'destroy'
	}
	
  // 'GET /attendance': {
  //   blueprint: "find", 
  //   criteria: {
  //       blacklist: ["access_token", "limit", "skip", "sort", "populate"]
  //   }
  // },
  
  // 'GET /coteriedata': {
  //   blueprint: "find", 
  //   criteria: {
  //       blacklist: ["access_token", "limit", "skip", "sort", "populate"]
  //   }
  // },
}
  
};
