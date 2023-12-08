migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rysj8taa",
    "name": "prictureUrl",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rysj8taa",
    "name": "field",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
