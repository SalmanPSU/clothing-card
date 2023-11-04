import { LitElement, html, css } from 'lit';

const tshirt = new URL('../assets/tshirt.jpg', import.meta.url).href;

class ClothingCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },

      variation: {
        type: Boolean,
        reflect: true
      },
    }
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    
    .title {
      background-color: #9dcc8b;
      color: black;
      padding: 16px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 16px;      
    }

    .cards {
      display: flex;
      max-width: 8000px;
      margin: auto;
      justify-content: center;
    }

    .card {
      max-width: 300px;
      background-color: #9dcc8b;
      margin: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s;
    }

    :host([variation]) .card {
      background-color: #242424;
    }

    .card img {
      width: 275px;
      height: 300px;
      border-radius: 16px;
    }

    .card-info {
      text-align: center;
      margin-top: 8px;
    }

    .details {
      padding: 10px;
    }
  `;


  constructor() {
    super();
    this.name = "T-Shirt";
    this.variation = false;
  }

  render() {
    return html`
      <div class="cards">
        <section class="card">
          <div class="card-info">
            <h2>${this.name}</h2>
            <img src="${tshirt}" alt="new arrivals">
            <details class="details">
              <summary>Details</summary>
                <p>We have new t-shirts!</p>
                <slot></slot>
            </details>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('clothing-card', ClothingCard);