import React from "react";


export default class ResultContent extends React.Component {
  render() {
    return (
      <result>
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container">
              <div id="company-logoBlack"></div>
          </div>
        </nav>
        <div class="container">
          <div class="jumbotron jumboImage">
              <div class="container"><h1><b>Happy +points สะสม</b></h1>
              <div class="col-sm-12 " >
                  <div class="col-sm-4 text-right fontCloud_lightlight light-color">คือ</div>
                  <div class="col-sm-4 fontCloudbold-non-align"><div class="well text-center">000</div></div>
                  <div class="col-sm-4 fontCloud_lightlight light-color">คะแนน</div>
              </div>
              <div class="col-sm-12" >
                  <div class="col-sm-4 text-right fontCloud_lightlight light-color">ใช้ไปแล้ว</div>
                  <div class="col-sm-4 fontCloudbold-non-align"><div class="well text-center">000</div></div>
                  <div class="col-sm-4 fontCloud_lightlight light-color">คะแนน</div>
              </div>
              <div class="col-sm-12" >
                  <div class="col-sm-4 text-right fontCloud_lightlight light-color">คงเหลือ</div>
                  <div class="col-sm-4 fontCloudbold-non-align"><div class="well text-center">000</div></div>
                  <div class="col-sm-4 fontCloud_lightlight light-color">คะแนน</div>
              </div>
            </div> 
          </div>
        </div>
        <br/>
        <div class="container">
        
          <div class="dark-fillter">
          <div class="col-md-12 fontCloudbold-non-align light-color"><h1>+Promotion on this week!</h1></div>      
          <div class="col-md-2"></div>    
          <div class="col-md-10 fontCloud_mini light-color"><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</b></div>
            <div class="news-loem"></div>
          </div>
          
        </div>
      </result>
    );
  }
}
