const {
  tambahBukuHandler, getAllBukuHandler,
  getBukuByIdHandler, editBukuByIdHandler, hapusBukuByIdHandler,
} = require('./handler');

const routes = [
  // API dapat menyimpan buku //
  {
    method: 'POST',
    path: '/books',
    handler: tambahBukuHandler,
  },
  // API dapat menampilkan seluruh buku//
  {
    method: 'GET',
    path: '/books',
    handler: getAllBukuHandler,
  },
  // API dapat menampilkan detail buku //
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBukuByIdHandler,
  },
  // API dapat mengubah data buku //
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBukuByIdHandler,
  },
  // API dapat menghapus buku //
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusBukuByIdHandler,
  },
];

module.exports = routes;
