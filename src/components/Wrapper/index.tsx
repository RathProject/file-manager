import React from 'react';

type Props = {
	children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
	return <div className="h-full">{children}</div>;
};

export default Wrapper;
