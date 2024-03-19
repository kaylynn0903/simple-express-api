import { RequestHandler } from "express"
import { v4 as uuidv4 } from "uuid"
import pool from "../database/pool"

// using query string to receive limit
export const getMessage: RequestHandler = (req, res) => {
  const { limit } = req.query

  pool
    .query("SELECT * FROM Message LIMIT $1", [limit])
    .then((result) => {
      res.send({ status: 200, message: "OK!", data: result.rows })
      console.log("message sent!")
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message, data: [] })
    })
}

// using body to receive data
export const createMessage: RequestHandler = (req, res) => {
  const { title, description, url } = req.body
  const id = uuidv4()
  const date_created = new Date().toISOString()

  if (title.length > 100) {
    res
      .status(400)
      .send({ status: 400, message: "Title length exceed.", data: [] })
    return
  }

  pool
    .query(
      "INSERT INTO Message (title, description, url, id, date_created) VALUES ($1, $2, $3, $4, $5)",
      [title, description, url, id, date_created]
    )
    .then((result) => {
      res.send({ status: 200, message: "OK!" })
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message, data: [] })
    })
}

// using body to receive the id
export const updateMessage: RequestHandler = (req, res) => {
  const { title, description, url, id } = req.body
  pool
    .query("UPDATE Message SET title=$1, description=$2, url=$3 WHERE id=$4", [
      title,
      description,
      url,
      id,
    ])
    .then((result) => {
      res.send({
        status: 200,
        message: `Message ${id} was updated!`,
        data: result.rows,
      })
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message, data: [] })
    })
}

// using url param to receive the id
export const deleteMessage: RequestHandler = (req, res) => {
  const { id } = req.params
  pool
    .query("DELETE FROM Message WHERE id=$1", [id])
    .then((result) => {
      res.send({
        status: 200,
        message: `Message ${id} was deleted!`,
        data: result.rows,
      })
    })
    .catch((err) => {
      res.status(400).send({ status: 400, message: err.message, data: [] })
    })
}
