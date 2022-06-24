const connection = require('./connection');

// Busca todos os autores do banco.
 const getAll = async () => {
 	const [books] = await connection.execute(
 		'SELECT id, title FROM model_example.books;',
 	);
			return books;
 };

 const getByAuthorId = async (query) => {
 	const [books] = await connection.execute(
    `SELECT id, title FROM model_example.books WHERE author_id = ?;`,
    [query]
  );
   
  if (books.length === 0) return null;
   
  return books;
 };

 const isValid = (title, author_id) => {
	if (!title || typeof title !== 'string' ) return false;
	if (!author_id) return false;

	return true;
};

 const create = async (title, author_id) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
   [title, author_id],
);

 module.exports = {
   getAll,
   getByAuthorId,
   isValid,
   create,
 };