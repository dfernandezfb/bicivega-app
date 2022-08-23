export const validationAddBike = values => {
  let errors = {};
  if (!values.model) {
    errors.model = 'El modelo es obligatorio';
  }  else if (values.model.length > 30) {
    errors.model = 'El modelo no debe poseer más de 30 caracteres';
  }

  if (!values.price) {
    errors.price = 'El precio es obligatorio'
  } else if (values.price < 0) {
    errors.price = 'El precio no puede ser negativo'
  } 
  return errors;
}
