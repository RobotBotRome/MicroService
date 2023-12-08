migrate((db) => {
  const collection = new Collection({
    "id": "eqkyjuzya2214kw",
    "created": "2023-07-26 07:47:39.563Z",
    "updated": "2023-07-26 07:47:39.563Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "598o7gkf",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eqkyjuzya2214kw");

  return dao.deleteCollection(collection);
})
