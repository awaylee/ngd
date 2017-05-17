package models

type Status struct {
    Reason      string          `json: reason`
    Return_code string          `json:return_code`
}
