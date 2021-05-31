import { coWorcerType } from '../App';
import { CoWorker } from './CoWorker';

export type CoWorkersPropsType = {
  coWorcersList: Array<coWorcerType>;
  editCoWorker: () => void;
};

export const CoWorkers: React.FC<CoWorkersPropsType> = ({
  coWorcersList,
  editCoWorker,
}) => {
  let coWorcer = coWorcersList.map((c) => {
    return (
      <CoWorker
        key={c.id}
        firstName={c.firstName}
        lastName={c.lastName}
        editCoWorker={editCoWorker}
      />
    );
  });
  return <div className="coworkers">{coWorcer}</div>;
};
