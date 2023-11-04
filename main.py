from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from authorization import AANumber

from test_data import EXAMPLE_AA_NUMBERS, EXAMPLE_AA_ACCOUNTS

app = FastAPI()
templates = Jinja2Templates(directory="templates")

@app.get("/")
async def get_home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.post("/protected")
async def post_protected(request: Request, aa_number: str = Form(...), last_name: str = Form(...), password: str = Form(...)):
    last_names = []
    for account in EXAMPLE_AA_ACCOUNTS:
        last = account.name.split(" ")
        last_names.append(last[len(last) -1])

    if aa_number in EXAMPLE_AA_NUMBERS and last_name in last_names:
        return templates.TemplateResponse("protected.html", {"request": request, "aa_number": aa_number})
    else:
        return templates.TemplateResponse("unprotected.html", {"request": request})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
