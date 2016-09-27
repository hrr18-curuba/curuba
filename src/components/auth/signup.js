import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, formValueSelector, Field} from 'redux-form';
import * as actions from '../../actions';


const validate = values => {
  const errors = {};


if(values.password !== values.passwordConfirm){
  errors.password = "Passwords do not match";
}
console.log(errors);
return errors;
}

const renderInput = field =>
<div>
  <input {...field.input} type={field.type} className="form-group" />
  {
    field.meta.touched &&
    field.meta.error &&
      <span className="error">{field.meta.error}</span>
  }
  </div>


class Signup extends Component {
  handleFormSubmit = ({email, password}) => {
    //this.props.signupUser({email, password});
    console.log({email,password});
  }
  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong> Uh Oh! </strong> {this.props.errorMessage}
          </div>
      );
    }
  }
  render(){
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label> Email:</label>
          <Field name="email" component={renderInput} type="email" />
        </fieldset>
        <fieldset className="form-group">
          <label> Password:</label>
        <Field name="password" component={renderInput} type="password" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label> Password:</label>
           <Field name="passwordConfirm" component={renderInput} type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>
    );
  }
}

// function validate(formProps){
//   const errors = {};
//   if(!formProps.email){
//   errors.email = 'You must enter an email';
// }
//   if(!formProps.password){
//   errors.password = 'You must enter a Password';
// }
//   if(!formProps.passwordConfirm){
//   errors.passwordConfirm = 'You must renter your password';
// }

//   if(formProps.password !== formProps.passwordConfirm){
//     errors.password = 'Passwords must match'
// }
//   return errors;
// }

Signup = reduxForm ({
  form: 'signin',
  validate
})(Signup);

const selector = formValueSelector('signin');
  Signup = connect(
    state => {
      const email = selector(state, 'email');
      const password = selector(state, 'password');
      return {
        email,
        password
      };
    })(Signup);

function mapStateToProps(state){
  return {errorMessage: state.auth.error};
}
export default connect(null, actions)(Signup);
// export default reduxForm({
//   form: 'signup',
//   fields: ['email', 'password', 'passwordConfirm'],
//   validate
// }, mapStateToProps, actions)(Signup);