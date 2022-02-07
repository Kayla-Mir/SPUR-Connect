const express = require('express');
const pool = require('../modules/pool');
const singleProfileRouter = express.Router();

/**
 * GET route template
 */

singleProfileRouter.get('/:id', (req, res) => {
  console.log('singleProfileRouter', req.params.id)
  const query = `
      SELECT *  FROM "profiles"
      JOIN "industry"
        ON "profiles"."industry_id"="industry"."id"
        WHERE "user_id"=$1`;
  const queryValues = [req.params.id];
  pool.query(query, queryValues)
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: GET singleProfile', err);
      res.sendStatus(500)
    })
}
);


module.exports = singleProfileRouter;