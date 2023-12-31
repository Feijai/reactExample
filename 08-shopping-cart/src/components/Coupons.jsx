import { coupons } from './config';

/* type CouponsProps = {
  onApplyCoupon: (coupon: string) => void,
}; */
const Coupons = (props) => {
  const { onApplyCoupon } = props;
  return (
    <section data-name="coupons">
      {coupons.map((coupon) => {
        return (
          <button
            key={coupon.id}
            className="btn btn-info"
            onClick={() => {
              onApplyCoupon(coupon);
            }}
          >
            {coupon.id}
          </button>
        );
      })}
    </section>
  );
};

export default Coupons;
