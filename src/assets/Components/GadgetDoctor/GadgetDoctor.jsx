import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FiSmartphone,
  FiMail,
  FiUser,
  FiAlertTriangle,
  FiUpload,
  FiClock,
} from "react-icons/fi";

const GadgetDoctor = () => {
  useEffect(() => {
    document.title = "Gadget Doctor | Gadget Heaven";
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gadgetName: "",
    model: "",
    problem: "",
    urgency: "normal",
    screenshot: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setFormData((prev) => ({ ...prev, screenshot: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      <div>
        <p className="font-bold">Diagnosis request received!</p>
        <p>Case ID: GD-{Math.floor(Math.random() * 10000)}</p>
        {formData.urgency === "emergency" && (
          <p className="text-yellow-600 mt-1">
            🚨 Emergency case - prioritizing your request!
          </p>
        )}
      </div>,
      { autoClose: 6000 }
    );

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      gadgetName: "",
      model: "",
      problem: "",
      urgency: "normal",
      screenshot: null,
    });
  };

  return (
    <div
      className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50"
      id="gadget-doctor"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-[#9538E2] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <FiAlertTriangle className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Gadget Doctor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Describe your gadget's symptoms and our tech surgeons will diagnose
            the issue!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-[#9538E2] to-[#7d2bc0] p-8 text-white">
              <div className="mb-8">
                <FiClock className="text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-3">Response Time</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-white bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                      !
                    </span>
                    <span>Normal Cases: 24-48 hours</span>
                  </li>
                  <li className="flex items-center text-yellow-300">
                    <span className="bg-yellow-300 bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                      🚨
                    </span>
                    <span>Emergency Cases: Under 6 hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-black">Pro Tip:</h4>
                <p className="text-sm opacity-90 text-black">
                  Uploading a photo/video of the issue increases diagnosis
                  accuracy by 70%
                </p>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center border-b border-gray-200 pb-2">
                      <FiUser className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="flex items-center border-b border-gray-200 pb-2">
                      <FiMail className="text-gray-400 mr-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center border-b border-gray-200 pb-2">
                      <FiSmartphone className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        name="gadgetName"
                        value={formData.gadgetName}
                        onChange={handleChange}
                        placeholder="Gadget Name"
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>

                    <div className="flex items-center border-b border-gray-200 pb-2">
                      <FiSmartphone className="text-gray-400 mr-3 opacity-0" />
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="Model Number"
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value="normal"
                        checked={formData.urgency === "normal"}
                        onChange={handleChange}
                        className="text-[#9538E2] focus:ring-[#9538E2]"
                      />
                      <span>Normal Case</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value="emergency"
                        checked={formData.urgency === "emergency"}
                        onChange={handleChange}
                        className="text-red-500 focus:ring-red-500"
                      />
                      <span className="text-red-600 font-medium">
                        🚨 Emergency
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Symptoms Description
                    </label>
                    <textarea
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9538E2] focus:border-transparent"
                      placeholder="Be specific: When did it start? What were you doing? Any error messages?"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      <FiUpload className="inline mr-2" />
                      Upload Screenshot/Video (Optional)
                    </label>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept="image/*,video/*"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#9538E2] file:text-white hover:file:bg-[#7d2bc0]"
                    />
                    {formData.screenshot && (
                      <p className="text-sm text-green-600 mt-1">
                        ✔ {formData.screenshot.name} ready to upload
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all flex items-center justify-center ${
                      isSubmitting
                        ? "bg-[#b580eb] cursor-not-allowed"
                        : formData.urgency === "emergency"
                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg"
                        : "bg-gradient-to-r from-[#9538E2] to-[#7d2bc0] hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          viewBox="0 0 24 24"
                        ></svg>
                        Diagnosing...
                      </>
                    ) : formData.urgency === "emergency" ? (
                      "SEND EMERGENCY REQUEST 🚑"
                    ) : (
                      "GET DIAGNOSIS REPORT 🩺"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-75">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
              <span className="text-green-600 text-xl">✓</span>
            </div>
            <span>100% Diagnosis Accuracy</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <span className="text-blue-600 text-xl">🔒</span>
            </div>
            <span>Secure Data Handling</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDoctor;
