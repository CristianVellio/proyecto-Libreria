import PropTypes from "prop-types";

const InputField = ({ label, name, type = "text", register, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required: true })}
        className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder={placeholder}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default InputField;
