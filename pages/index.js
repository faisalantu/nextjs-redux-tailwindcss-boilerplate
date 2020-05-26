import React from "react";
import { connect } from "react-redux";

function index({ test: { hello } }) {
  return (
    <div>
      <div className="p-4 shadow rounded bg-white text-center mt-5">
        <h1 className="text-purple-500 leading-normal">{hello}</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  test: state.test,
});
export default connect(mapStateToProps)(index);
