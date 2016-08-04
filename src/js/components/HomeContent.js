import React from "react";

import Header from "./Header";

export default class HomeContent extends React.Component {
  render() {
    return (
      <home>
      <Header />
      <br/>
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-success">
                <div class="panel-heading">
                    <span class="glyphicon glyphicon-off" aria-hidden="true"></span> Please Enter your email
                </div>
                <div class="panel-body">
                    <from role="form">
                        <fieldset>
                            <div class="form-group">
                                <input id="email" class="form-control" placeholder="Email" name='username' type="text" autofocus/>
                            </div>
                            {/* <div class="form-group">
                                 <input id="password" class="form-control" placeholder="Password" name='password' type="password" autofocus/>
                             </div>
                             */}
                            <div class="checkbox">
                            </div>
                            <a id="loginBtn" class="btn btn-sx btn-success btn-block" onClick={this.OnclickGetPoint.bind(this)} >Get points</a>
                        </fieldset>
                    </from>
                </div>
            </div>
        </div>
      </home>
    );
  }

OnclickGetPoint(){
    console.log(this);
}

}