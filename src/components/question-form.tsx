import { TQuestion } from "libs/types";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

import ErrorMessage from "./error-message";
import { BsQuestionSquareFill } from "react-icons/bs";
import Button from "./button";
import { TiDelete } from "react-icons/ti";

type QuestionFormProps = {
  question?: TQuestion;
  onSubmit: SubmitHandler<TQuestion>;
};

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit, question }) => {
  const [selectAnswer, setSelectAnswer] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<TQuestion>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const handleFormSubmit: SubmitHandler<TQuestion> = (data) => {
    onSubmit(data);
  };

  const handleAddOption = () => {
    setSelectAnswer(false);
    append({ title: "", value: 0 });
  };

  const handleRemoveOption = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    if (question) {
      setValue("question", question.question);
      question.options.forEach((option) => {
        append({ title: option.title, value: option.value });
      });
    }
  }, [question, setValue, append]);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BsQuestionSquareFill className="h-6 w-6 text-gray-400" />
        </div>
        <input
          type="text"
          id="question"
          placeholder="Enter your Question"
          {...register("question", {
            required: {
              value: true,
              message: "Question text is required.",
            },
          })}
          className="text-input pl-10"
        />
      </div>
      {errors.question && errors.question.message && (
        <ErrorMessage message={errors.question.message} />
      )}

      {!selectAnswer && (
        <div className="my-4">
          <label
            htmlFor="options"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Options
          </label>
          {fields.map((option, index) => (
            <div
              key={option.id}
              className="flex items-center justify-between gap-3 mb-2"
            >
              <input
                type="text"
                placeholder="Option"
                {...register(`options.${index}.title`, {
                  required: "Option text is required",
                })}
                defaultValue={option.value}
                className={`text-input`}
              />
              <input
                type="number"
                placeholder="Points"
                {...register(`options.${index}.value`, {
                  required: "Option value is required",
                })}
                defaultValue={option.value}
                className={`text-input`}
              />

              <TiDelete
                className="w-16 h-16 text-danger-default hover:text-danger-dark"
                onClick={() => handleRemoveOption(index)}
              />
            </div>
          ))}

          <Button type="button" variant="ghost" handleClick={handleAddOption}>
            <p>Add Another Option</p>
          </Button>
        </div>
      )}

      <Button type="submit" variant="primary">
        {question ? "Update Question" : "Create Question"}
      </Button>
    </form>
  );
};

export default QuestionForm;
