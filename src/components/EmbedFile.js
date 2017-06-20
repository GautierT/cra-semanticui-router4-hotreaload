import React, { Component } from 'react'
import * as files from '../utils/Files'
import { logException } from '../utils/Utils'

class EmbedFile extends Component {

  constructor () {
    super()
    this.state = {
      url: null
    }
  }

  componentDidMount () {
    console.log('componentDidMount | EmbedFile : ', this.props.file_id)
    this.getDoc(this.props.file_id)
  }

  getDoc = (file_id) => {
    files.getUrlById(file_id)
      .then(url => {
        //console.log('url : ', url)
        // Parametre d'affichage du PDF : http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf
        this.setState({
          url: url + '#zoom=' + this.props.zoom
        })
      })
      .catch(err => {
        logException(err)
      })
  }

  render () {
    return (

      <object data={this.state.url} type="application/pdf" width={this.props.width} height={this.props.height}>
        <iframe title="Fichier PDF" src={this.state.url} width={this.props.width} height={this.props.height} style={{border: 'none'}}>
          <p>Il semblerait que votre navigateur soit trop vieux pour afficher ce PDF. Mais ne vous inquietez pas, vous pouvez <a rel="noopener noreferrer" href={this.state.url} target="_blank">le telecharger en cliquant ici !</a></p>
        </iframe>
      </object>
    )
  }
}

EmbedFile.propTypes = {}
EmbedFile.defaultProps = {
  zoom: 50,
  width: '100%',
  height: '500px'
}

export default EmbedFile
