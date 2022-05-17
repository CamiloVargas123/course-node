import express from "express"

async function getProducts(_: express.Request, res: express.Response) {
  res.send({ list: [1, 2, 3] })
}

async function getProduct() {

}
async function createProduct() {

}
async function updateProduct() {

}
async function deleteProduct() {

}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct }