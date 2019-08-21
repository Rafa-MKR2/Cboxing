class ErrorFirebase{


     error(erro: string): string{
       let feedback = ""
        switch(erro) {
            case "auth/user-disabled":
                feedback = "Usuário bloqueado, contate o administrador"
              break;

            case "auth/invalid-email":
                feedback = "Esse e-mail é inválido!"
              break;

            case "auth/wrong-password":
                feedback = "Senha incorreta!"
              break;
              case "auth/user-not-found":
                feedback = "Usuário nao encontrado!"
              break;

              case "auth/network-request-fail":
                feedback = "Usuário nao encontrado!"
              break;
            default:
                feedback = erro;
          }


          return feedback;
    } 
}