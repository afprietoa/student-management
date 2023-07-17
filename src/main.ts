import './style.css'
import './styles/hero.css'
import './styles/table.css'
import './styles/form.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/datatables.net-dt/css/jquery.dataTables.min.css';
import '../node_modules/datatables.net-dt/js/dataTables.dataTables.min.js';
import '../node_modules/datatables.net/js/jquery.dataTables.min.js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="hero-wrapper">
        <div class="hero">
          <div class="hero-body">
            <h1 class="hero-title">Student</h1>
            <p>Nurture the minds, for a brighter future</p>
            <div class="hero-button">
              <button type="button" class="btn btn-primary person" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <span class="material-symbols-outlined person">
              person
              </span>
              <span class="btn-name">Sign In</span>
              </button>
            </div>

       
            
            
           </div>
          <video autoplay loop muted>
          <source src="./src/assets/videos/hero.mp4" />
        </video>
        </div>
    </div>


    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-semibold title-form" id="staticBackdropLabel">Add new student</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        <form id="form">
        <div class="mb-1">
        <label for="tipoIdentificacion" class="form-label fw-medium">Tipo de Identificación:</label>
        <select name="tipoIdentificacion" id="tipoIdentificacion" class="form-select" data-type="tipoIdentificacion" required>
          <option value="1">Cédula de ciudadanía</option>
          <option value="2">Tarjeta de identidad</option>
          <option value="3">Pasaporte</option>
        </select>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
      <label for="numeroIdentificacion" class="form-label fw-medium">Numero Identificación:</label>
      <input type="text" class="form-control" id="numeroIdentificacion" data-type="numeroIdentificacion" min="3" max="30" pattern="^(?=.*[0-9])$" required></input>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
      <label for="nombres" class="form-label fw-medium">Nombres:</label>
      <input type="text" class="form-control" id="nombres" data-type="nombres" minlength="3" maxlength="30" pattern="^[a-zA-Z ]*$" required>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
        <label for="apellidos" class="form-label fw-medium">Apellidos:</label>
        <input type="text" class="form-control" id="apellidos" data-type="apellidos" minlength="3" maxlength="30" pattern="^[a-zA-Z ]*$" required>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
        <label for="celular" class="form-label fw-medium">Celular:</label>
        <input type="text" class="form-control" id="celular" data-type="celular" min="10" max="13" pattern="^(?=.*[0-9])$" required>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
        <label for="correo" class="form-label fw-medium">Email:</label>
        <input type="email" class="form-control" id="correo" data-type="correo" required>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
        <label for="linkedin" class="form-label fw-medium">Linkedin:</label>
        <input type="text" class="form-control" id="linkedin" data-type="linkedin" minlength="10" maxlength="100" pattern="^https://linkedin.com/in/[a-zA-Z0-9_.+-]*$" required>
        <span class="input-message-error">Este campo no es valido</span>
      </div>

      <div class="mb-1">
        <label for="github" class="form-label fw-medium">GitHub:</label>
        <input type="text" class="form-control" id="github" data-type="github" minlength="10" maxlength="100" pattern="^https://github.com/[a-zA-Z0-9_.+-]*$" required>
        <span class="input-message-error">Este campo no es valido</span>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary" id="btn-form">Sign In</button>
      </div>
      </div>
      </form>
      </div>
    </div>
  </div>

  <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
      <div class="modal-header card-header"></div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body card-body">

      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>

<div class="container py-5">

<table id="example" class="table table-striped" style="width:100%">
        <thead id="table-head">
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody id="table-body">
            <tr>
                <td></td>
            </tr>
        </tbody>

    </table>

    </div>

  </div>
`