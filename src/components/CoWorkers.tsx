import { coWorcerType } from '../App';
import { CoWorker } from './CoWorker';

export type CoWorkersPropsType = {
  coWorcersList: Array<coWorcerType>;
};

export const CoWorkers: React.FC<CoWorkersPropsType> = ({ coWorcersList }) => {
  let coWorcer = coWorcersList.map((c) => {
    return (
      <CoWorker key={c.id} firstName={c.firstName} lastName={c.lastName} />
    );
  });
  return <div className="coworkers">{coWorcer}</div>;
};
