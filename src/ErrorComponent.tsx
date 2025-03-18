const ErrorComponent = ({ message }: { message: string }) => {
  return (
    <>
      <div>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorComponent;
