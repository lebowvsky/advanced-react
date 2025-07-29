const ErrorExample = () => {
  let count = 0;
  const handleCount = () => {
    count += 1;
    console.log(count);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button onClick={handleCount}>ajouter +1</button>
    </>
  );
};

export default ErrorExample;
