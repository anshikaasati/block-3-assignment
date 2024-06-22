import React, { useState, useEffect } from 'react';
import useFormValidation from '../hooks/useFormValidation';
import { fetchAdditionalQuestions } from '../services/api';

const SurveyForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [surveyTopic, setSurveyTopic] = useState('');
  const [favoriteLanguage, setFavoriteLanguage] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [dietPreference, setDietPreference] = useState('');
  const [highestQualification, setHighestQualification] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [feedback, setFeedback] = useState('');
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  // Custom hook for form validation
  const { isFormValid, validateField } = useFormValidation();

  useEffect(() => {
    if (surveyTopic) {
      fetchAdditionalQuestions(surveyTopic)
        .then(data => setAdditionalQuestions(data.questions))
        .catch(error => console.error('Error fetching additional questions:', error));
    }
  }, [surveyTopic]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      console.error('Form validation failed.');
      return;
    }

    try {
      // Replace with actual API call logic here
      console.log('Submitting form:', { fullName, email, surveyTopic, favoriteLanguage, yearsOfExperience, exerciseFrequency, dietPreference, highestQualification, fieldOfStudy, feedback });

      // Simulate successful submission
      alert('Form submitted successfully!');

      // Reset form fields after submission (optional)
      setFullName('');
      setEmail('');
      setSurveyTopic('');
      setFavoriteLanguage('');
      setYearsOfExperience(0);
      setExerciseFrequency('');
      setDietPreference('');
      setHighestQualification('');
      setFieldOfStudy('');
      setFeedback('');
      setAdditionalQuestions([]);

    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state or retry logic here
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">
            <span className="text-gray-700">Full Name:</span>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} onBlur={() => validateField('fullName', fullName)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => validateField('email', email)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Survey Topic:</span>
            <select value={surveyTopic} onChange={(e) => setSurveyTopic(e.target.value)} onBlur={() => validateField('surveyTopic', surveyTopic)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
          </label>
        </div>

        {/* Conditional sections based on survey topic */}
        {surveyTopic === 'Technology' && (
          <div>
            <label className="block">
              <span className="text-gray-700">Favorite Programming Language:</span>
              <input type="text" value={favoriteLanguage} onChange={(e) => setFavoriteLanguage(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
          </div>
        )}

        {surveyTopic === 'Health' && (
          <div>
            <label className="block">
              <span className="text-gray-700">Exercise Frequency:</span>
              <input type="text" value={exerciseFrequency} onChange={(e) => setExerciseFrequency(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <label className="block">
              <span className="text-gray-700">Diet Preference:</span>
              <input type="text" value={dietPreference} onChange={(e) => setDietPreference(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
          </div>
        )}

        {surveyTopic === 'Education' && (
          <div>
            <label className="block">
              <span className="text-gray-700">Highest Qualification:</span>
              <input type="text" value={highestQualification} onChange={(e) => setHighestQualification(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
            <label className="block">
              <span className="text-gray-700">Field of Study:</span>
              <input type="text" value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </label>
          </div>
        )}

        {/* Feedback field */}
        <div>
          <label className="block">
            <span className="text-gray-700">Feedback:</span>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} onBlur={() => validateField('feedback', feedback)} rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </label>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button type="submit" disabled={!isFormValid()} className="py-2 px-4 bg-indigo-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
            Submit
          </button>
        </div>

        {/* Additional questions section */}
        {additionalQuestions.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mt-4">Additional Questions:</h3>
            <ul className="list-disc list-inside">
              {additionalQuestions.map((question, index) => (
                <li key={index} className="mt-2">{question.text}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default SurveyForm;
