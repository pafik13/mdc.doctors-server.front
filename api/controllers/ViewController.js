/**
 * ViewController
 *
 * @description :: Server-side logic for managing Views
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    // '/': {
    //     view: 'homepage'
    // },

    // '/report': {
    //     view: 'report'
    // },
    
    home: function(req, res) {
        return res.view('main', {
            menu: 'main'
        });
    },
    
    nets: function(req, res) {
        return res.view('nets', {
            menu: 'nets'
        });
    },
    
    agents: function(req, res) {
        return res.view('agents', {
            menu: 'agents'
        });
    },

    contracts: function(req, res) {
        return res.view('contracts', {
            menu: 'contracts'
        });
    },

    drugbrands: function(req, res) {
        return res.view('drugbrands', {
            menu: 'drugbrands'
        });
    },

    drugskus: function(req, res) {
        return res.view('drugskus', {
            menu: 'drugskus'
        });
    },

    messagetypes: function(req, res) {
        return res.view('messagetypes', {
            menu: 'messagetypes'
        });
    },
    
    phototypes: function(req, res) {
        return res.view('phototypes', {
            menu: 'phototypes'
        });
    },
    
    places: function(req, res) {
        return res.view('places', {
            menu: 'places'
        });
    },
    
    positions: function(req, res) {
        return res.view('positions', {
            menu: 'positions'
        });
    },
    
    promotions: function(req, res) {
        return res.view('promotions', {
            menu: 'promotions'
        });
    },
    
    categories: function(req, res) {
        return res.view('categories', {
            menu: 'categories'
        });
    },
    
    regions: function(req, res) {
        return res.view('regions', {
            menu: 'regions'
        });
    },
    
    subways: function(req, res) {
        return res.view('subways', {
            menu: 'subways'
        });
    },
    
    worktypes: function(req, res) {
        return res.view('worktypes', {
            menu: 'worktypes'
        });
    },
    
    materials: function(req, res) {
        return res.view('materials', {
            menu: 'materials'
        });
    },
    
    listedhospitals: function(req, res) {
        return res.view('listedhospitals', {
            menu: 'listedhospitals'
        });
    },

    categoryrules: function(req, res) {
        return res.view('categoryrules', {
            menu: 'categoryrules'
        });
    },
    
    uploadfiles: function(req, res) {
        return res.view('uploadfiles', {
            menu: 'uploadfiles'
        });
    },
    
    s3callback: function(req, res) {
        var allParams = req.params.all();
        
        return res.json(allParams);
    },
    
};
