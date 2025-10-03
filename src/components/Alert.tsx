import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import { clearAlert } from '../features/alert/alertSlice';
import { useEffect } from 'react';

export default function Alert() {
  const { message, type } = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch<AppDispatch>();

  // auto-hide after 3s
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  // icon + color depending on alert type
  let icon = null;
  let iconColor = 'text-blue-600';
  if (type === 'success') {
    iconColor = 'text-green-600';
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (type === 'error') {
    iconColor = 'text-red-600';
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }

  return (
    <div
      role="alert"
      className="rounded-md border border-gray-300 bg-white p-4 shadow-sm mb-4"
    >
      <div className="flex items-start gap-2">
        <div className={iconColor}>{icon}</div>

        <div className="flex-1">
          <strong className="font-medium text-gray-900">
            {type === 'success' && 'Success'}
            {type === 'error' && 'Error'}
            {type === 'info' && 'Info'}
          </strong>
          <p className="mt-0.5 text-sm text-gray-700">{message}</p>
        </div>

        <button
          onClick={() => dispatch(clearAlert())}
          className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
          type="button"
          aria-label="Dismiss alert"
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
