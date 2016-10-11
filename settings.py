MONGO_HOST = 'localhost'
MONGO_PORT = 27017

MONGO_DBNAME = 'clownsighting'

RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

schema = {
    'scarinesslevel' : {'type' : 'string'},
    'date' : {'type' : 'date'},
    'address' : { 'type' : 'string' },
    'city' : {'type' : 'string'},
    'state' : {'type' : 'string'},
    'country' : {'type' : 'string'},
    'continent' : {'type' : 'string'}
}

sightings = {
    'additional_lookup' : {
        'url' : 'regex("[\w]+")',
        'field' : 'date'
        },
    'schema' : schema
}

DOMAIN = {'sightings': sightings,}