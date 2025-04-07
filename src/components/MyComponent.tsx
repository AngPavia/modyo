import { DButton } from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();
  const [showLogos, setShowLogos] = useState(false);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center">Mantenimiento de Datos Demográficos</h2>
      
      {/* Información Personal */}
      <div className="card shadow-sm p-4 my-4">
        <div className="row">
          <div className="col-md-6">
            <strong>Fecha de Nacimiento:</strong> 24/Septiembre/1990
          </div>
          <div className="col-md-6">
            <strong>Fecha de Ingreso:</strong> 07/Abril/2016
          </div>
        </div>
      </div>

      {/* Datos de Contacto */}
      <div className="card shadow-sm p-4">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td><strong>C.P</strong></td>
              <td>1100</td>
              <td><strong>Municipio/Estado</strong></td>
              <td>CDMX/Miguel Hidalgo</td>
            </tr>
            <tr>
              <td><strong>Colonia</strong></td>
              <td>Lomas de Chapultepec</td>
              <td><strong>Domicilio</strong></td>
              <td>Blvd Manuel A. Camacho 4</td>
            </tr>
            <tr>
              <td><strong>Teléfono de Casa</strong></td>
              <td>(480) 555-0103</td>
              <td><strong>Teléfono de Oficina</strong></td>
              <td>(406) 555-0120</td>
            </tr>
            <tr>
              <td><strong>Celular</strong></td>
              <td>(208) 555-0112</td>
              <td><strong>Correo Electrónico</strong></td>
              <td>willie.jennings@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Botón de Modificar */}
      <div className="text-center mt-4">
        <DButton
          onClick={() => setShowLogos((prevState) => !prevState)}
          text="Modificar"
          size="lg"
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}
