import React from 'react';
import { render } from 'react-dom';
import ReactPhoneInput from './index';
import TextField from '@mui/material/TextField';

class Demo extends React.Component {
  state = { defaultCountry: 'br', value: '12345' }

  render() {
    return (
      <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
        <style dangerouslySetInnerHTML={{__html: `
          input[type="tel"].custom-phone-input {
            font-size: 14px;
            border-color: #a0a0a0;
          }

          .custom-phone-button {
            background: rgb(200, 215, 225) !important;
            border-color: #a0a0a0 !important;
          }

          .custom-dropdown {
            margin-top: 0 !important;
          }
        `}} />

        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
          <p>v1.2.1</p>
          <p>Exclude countries (usa, canada)</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='no'
            excludeCountries={['us', 'ca']}
          />
          <p>Only countries</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='gb'
            onlyCountries={['gb', 'es']}
          />
          <p>Preferred countries</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='it'
            preferredCountries={['it', 'se']}
          />
        </div>

        <div style={{ display: 'inline-block', marginLeft: '40px' }}>
          <p>v2</p>
          <p>Auto country detect by value</p>
          <ReactPhoneInput
            component={TextField}
            value='+3802343252'
          />
          <p>Disabled area codes with disableAreaCodes</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='us'
            disableAreaCodes={true}
          />
          <p>Disabled flag by default</p>
          <p>Customizable placeholder</p>
          <p>Customizable styles</p>
          <ReactPhoneInput
            component={TextField}
            disableAreaCodes={true}
            placeholder='Type your phone here'
            inputStyle={{
              width: '300px',
              height: '35px',
              fontSize: '13px',
              paddingLeft: '48px',
              borderRadius: '5px'
            }}
            buttonStyle={{ borderRadius: '5px 0 0 5px' }}
            dropdownStyle={{ width: '300px' }}
          />
          <p>Customizable classes</p>
          <ReactPhoneInput
            component={TextField}
            containerClass={'react-tel-input'}
            inputClass={'custom-phone-input'}
            buttonClass={'custom-phone-button'}
            dropdownClass={'custom-dropdown'}
          />
        </div>

        <div style={{ display: 'inline-block', marginLeft: '40px', verticalAlign: 'top', marginTop: '35px' }}>
          <p>Custom region selected: {`{'europe'}`}</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='it'
            regions={'europe'}
          />
          <p>Custom regions selected: {`{['north-america', 'carribean']}`}</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='ca'
            regions={['north-america', 'carribean']}
          />
          <p>Disabled dropdown and country code</p>
          <ReactPhoneInput
            component={TextField}
            onlyCountries={['us']}
            defaultCountry='us'
            disableAreaCodes={true}
            disableCountryCode={true}
            disableDropdown={true}
            placeholder='(702) 123-4567'
          />
          <p>Localization</p>
          <p>Non-editable country code</p>
          <p>Autofocus</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='de'
            onlyCountries={['de', 'es']}
            localization={{'Germany': 'Deutschland', 'Spain': 'España'}}
            countryCodeEditable={false}
            inputExtraProps={{
              name: 'tel',
              required: true,
              autoFocus: true
            }}
          />
        </div>

        <div style={{ display: 'inline-block', marginLeft: '40px', verticalAlign: 'top', marginTop: '35px' }}>
          <p>Search field</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='nl'
            enableSearchField
          />
          <ReactPhoneInput
            component={TextField}
            defaultCountry='pl'
            containerStyle={{marginTop: '15px'}}
            searchClass='search-class'
            searchStyle={{margin: '0', width: '97%', height: '30px'}}
            enableSearchField
            disableSearchIcon
          />
          <p>Custom masks</p>
          <ReactPhoneInput
            component={TextField}
            defaultCountry='at'
            onlyCountries={['fr', 'at']}
            masks={{'fr': '+.. (...) ..-..-..', 'at': '+.. (....) ...-....', 'zz': '+.. ... ...'}}
          />
          <p>State manipulations</p>
          <ReactPhoneInput
            component={TextField}
            value={this.state.value}
            onChange={(value, country) => {console.log(value, country); this.setState({ value })}}
          />
          <ReactPhoneInput
            component={TextField}
            containerStyle={{marginTop: '15px', marginBottom: '15px'}}
            defaultCountry={this.state.defaultCountry}
          />
          <button onClick={() => {
            if (this.state.defaultCountry == 'br') {this.setState({defaultCountry: 'it'})}
            else {this.setState({defaultCountry: 'br'})}
          }}>Change default country</button>
        </div>
      </div>
    )
  }
}


export default render(
  <Demo />,
  document.getElementById('root')
);
