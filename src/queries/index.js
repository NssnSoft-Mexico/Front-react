import gql from "graphql-tag";

/*aqui empieza el nuevo modulo*/ 

export const QUERY_CATALOGOS = gql`
	query getCatalogos($nombre: String!){
		getCatalogo(nombre: $nombre) {
		identificador
		descripcion
		status
		}
	} 
`;

export const QUERY_GETUSUARIO_LDAP = gql`
	query getLogin($user: String!,$pass: String!){
		getLogin(user: $user,pass: $pass){
			id
			name
			direccion
		}
	}
`;

export const QUERY_USERS_DATA = gql`
	query getEmail($email: String!){
		getEmail(email: $email){
			id_integrante
			nombre
			apepat
			apemat
			ubicacion { identificador descripcion }
		}
	}
`;

export const QUERY_CURSOS_USERS = gql`
	query getUsers{
		getUsers{
			id
			name
			direccion
			ciudad
			pais
			telefono
			email
			user
			pass
		} 
	}
`;

export const QUERY_PROD = gql`
	query getProduct{
		getProduct{
			id
			name
			cantidad
			activo
		} 
	}
`;

export const QUERY_PRODUCT = gql`
	query getProductDel{
		getProductDel{
			id
			name
			cantidad
			activo

		} 
	}
`;

