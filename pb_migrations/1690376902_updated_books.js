migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gtrytrke",
    "name": "picture",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw")

  // remove
  collection.schema.removeField("gtrytrke")

  return dao.saveCollection(collection)
})
