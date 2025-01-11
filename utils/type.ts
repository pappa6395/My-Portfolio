
export type ContactProps = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export type SelectOptionProps = {
    label: string;
    value: string;
};
  
export type CategoryFormProps = {
    editingId?: string | undefined;
    initialData?: any | undefined | null;
    mainCategories: SelectOptionProps[];
};