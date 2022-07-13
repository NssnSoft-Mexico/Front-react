import gql from 'graphql-tag';

export const UPDATE_CURSOS = gql`
    mutation updateUserInfo(
        $id: Int
        $name: String
        $direccion: String
        $ciudad: String
        $pais: String
        $telefono: String
        $email: String
        $foto: String
        $pass: String
        $user: String
    ){
    updateUserInfo(
        id: $id,
        name: $name,
        direccion: $direccion,
        ciudad: $ciudad,
        pais: $pais,
        telefono: $telefono,
        email: $email,
        foto: $foto,
        pass: $pass,
        user: $user,
    )}
`;

export const CREAR_PRODUCTO = gql`
    mutation insertProduct(
        $name: String
        $cantidad: String
        $activo: String
    ){
        insertProduct(
        name: $name,
        cantidad: $cantidad,
        activo: $activo
    )}
`;

export const DEL_PRODUCT = gql`
    mutation deleteProduct(
        $id: String
        $activo: String
    ){
        deleteProduct(
        id: $id,
        activo: $activo
    )}
`;

export const ELIMINAR_CURSO = gql`
    mutation deleteCurso($id_modificacion: Int) {
        deleteCurso(id_modificacion: $id_modificacion)
    }
`;
