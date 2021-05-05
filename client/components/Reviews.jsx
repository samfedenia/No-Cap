import React from 'react';
import { connect } from 'react-redux';
import { addReview } from '../store/storeComponents/addReview';
// import './styles/Reviews.css';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      body: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevProps.product.reviews.length !== this.props.product.reviews.length) {

  //   }
  // }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.addReview(
      this.props.product.id,
      this.props.user.id,
      this.state.stars,
      this.state.body
    );
  }

  render() {
    const singleProduct = this.props.product;
    const { stars, body } = this.state;
    const { onChange, onSubmit } = this;
    return singleProduct ? (
      <form action="submit" onSubmit={onSubmit}>
        <div>
          <table>
            <tbody>
              <tr>
                <th>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="1"
                    label="star review"
                    value={stars}
                    onChange={onChange}
                    name="stars"
                  />
                </th>
                <td>
                  <textarea
                    rows="1"
                    cols="100"
                    label="body review"
                    value={body}
                    onChange={onChange}
                    name="body"
                  />
                </td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
              {singleProduct.reviews.map((review) => {
                return (
                  <tr key={review.id}>
                    <th>{review.stars}</th>
                    <td>{review.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    ) : (
      'Loading'
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (productId, userId, review, body) => {
      dispatch(addReview(productId, userId, review, body));
    },
  };
};

export default connect(null, mapDispatchToProps)(Reviews);
