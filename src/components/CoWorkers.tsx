import { coWorcerType } from '../App';
import { CoWorker } from './CoWorker';

export type CoWorkersPropsType = {
  coWorcersList: Array<coWorcerType>;
  editCoWorker: () => void;
  delCoWorker: (id: number) => void;
};

export const CoWorkers: React.FC<CoWorkersPropsType> = ({
  coWorcersList,
  editCoWorker,
  delCoWorker,
}) => {
  let coWorcer = coWorcersList.map((c) => {
    return (
      <CoWorker
        key={c.id}
        coWorker={c}
        editCoWorker={editCoWorker}
        delCoWorker={delCoWorker}
      />
    );
  });
  return <div className="coworkers">{coWorcer}</div>;
};
